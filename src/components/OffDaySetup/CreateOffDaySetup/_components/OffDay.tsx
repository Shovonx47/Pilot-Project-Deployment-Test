"use client";

import { Input } from "@/components/ui/input";
import { Controller, useFieldArray } from "react-hook-form";
import { Trash2, SquarePlus, NotebookTabs } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DatePickerForm } from "@/components/Reusable/DatePickerForm";
import { Textarea } from "@/components/ui/textarea";

const getDayOfWeek = (dateString: string) => {
    if (!dateString) return "";

    // Convert string to Date object in UTC
    const [day, month, year] = dateString.split("-").map(Number);
    const date = new Date(Date.UTC(year, month - 1, day)); // Month is 0-based in JS

    if (isNaN(date.getTime())) return ""; // If invalid date, return empty

    return date.toLocaleDateString("en-US", { weekday: "long", timeZone: "UTC" });
};


interface ExamsInfoProps {
    control: any;
    setValue: (name: string, value: any) => void;
    trigger: (name: string) => void;
    getValues: any;
}

const OffDay = ({ control, setValue, trigger, getValues }: ExamsInfoProps) => {
    const { fields, append, remove, replace } = useFieldArray({
        control,
        name: "offDays",
    });

    useEffect(() => {
        if (fields.length === 0) {
            replace([{ title: "", description: "", startDate: "", startDay: "", endDate: "", endDay: "", createdBy: "" }]);
        }
    }, [replace, fields.length]);

    return (
        <div className="p-6 bg-white">
            <div className="border rounded-md">
                <div className="p-4 bg-[#E9EDF4] rounded-md rounded-b-none flex justify-between items-center gap-2 mb-5">
                    <div className="flex items-center gap-2">
                        <NotebookTabs className="h-5 w-5" /> Off Day Details
                    </div>
                </div>

                <div className="m-4">
                    {fields.map((field, index) => (
                        <div key={field.id} className="lg:flex justify-between gap-x-4 mb-4">
                            <div className="w-full">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                                    {/* Title */}
                                    <Controller
                                        name={`offDays.${index}.title`}
                                        control={control}
                                        rules={{ required: "Name of the off day or occasion is required." }}
                                        render={({ field, fieldState: { error } }) => (
                                            <div>
                                                <label className="text-sm text-gray-600">Name of the off day</label>
                                                <Input {...field} placeholder="Enter name e.g., 'Teacher's Day' or 'National Holiday'" />
                                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                            </div>
                                        )}
                                    />


                                    {/* Start Date */}
                                    <Controller
                                        name={`offDays.${index}.startDate`}
                                        control={control}
                                        rules={{ required: "Start Date is required" }}
                                        render={({ field, fieldState: { error } }) => (
                                            <div>
                                                <DatePickerForm
                                                    value={field.value}
                                                    onChange={(formattedDate) => {
                                                        setValue(`offDays.${index}.startDate`, formattedDate);
                                                        const dayOfWeek = getDayOfWeek(formattedDate);
                                                        setValue(`offDays.${index}.startDay`, dayOfWeek); // Auto-set day
                                                        trigger(`offDays.${index}.startDate`);
                                                    }}
                                                    label="Start Date"
                                                />
                                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                            </div>
                                        )}
                                    />

                                    {/* Auto-Selected Start Day */}
                                    <Controller
                                        name={`offDays.${index}.startDay`}
                                        control={control}
                                        render={({ field }) => (
                                            <div>
                                                <label className="text-sm text-gray-600">Start Day</label>
                                                <Input {...field} readOnly className="bg-gray-100 cursor-not-allowed" />
                                            </div>
                                        )}
                                    />
                                    {/* End Date */}

                                    <Controller
                                        name={`offDays.${index}.endDate`}
                                        control={control}
                                        rules={{
                                            validate: (value) => {
                                                const startDateStr = getValues(`offDays.${index}.startDate`);
                                                if (startDateStr && value) {
                                                    const [startDay, startMonth, startYear] = startDateStr.split("-").map(Number);
                                                    const [endDay, endMonth, endYear] = value.split("-").map(Number);

                                                    const startDate = new Date(startYear, startMonth - 1, startDay);
                                                    const endDate = new Date(endYear, endMonth - 1, endDay);

                                                    if (endDate < startDate) {
                                                        return "End Date cannot be earlier than Start Date.";
                                                    }
                                                }
                                                return true;
                                            },
                                        }}
                                        render={({ field, fieldState: { error } }) => (
                                            <div>
                                                <DatePickerForm
                                                    value={field.value}
                                                    onChange={(formattedDate) => {
                                                        setValue(`offDays.${index}.endDate`, formattedDate);
                                                        const dayOfWeek = getDayOfWeek(formattedDate);
                                                        setValue(`offDays.${index}.endDay`, dayOfWeek); // Auto-set day
                                                        trigger(`offDays.${index}.endDate`);
                                                    }}
                                                    label="End Date"
                                                />
                                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                            </div>
                                        )}
                                    />



                                    {/* Auto-Selected End Day */}
                                    <Controller
                                        name={`offDays.${index}.endDay`}
                                        control={control}
                                        render={({ field }) => (
                                            <div>
                                                <label className="text-sm text-gray-600">End Day</label>
                                                <Input {...field} readOnly className="bg-gray-100 cursor-not-allowed" />
                                            </div>
                                        )}
                                    />

                                    {/* Created By */}
                                    <Controller
                                        name={`offDays.${index}.createdBy`}
                                        control={control}
                                        rules={{ required: "Created By is required" }}
                                        render={({ field, fieldState: { error } }) => (
                                            <div>
                                                <label className="text-sm text-gray-600">Created By</label>
                                                <Input {...field} placeholder="Enter your name" />
                                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                            </div>
                                        )}
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <Controller
                                        name={`offDays.${index}.description`}
                                        control={control}
                                        rules={{ required: "Description is required" }}

                                        render={({ field, fieldState: { error } }) => (
                                            <div className="w-full">
                                                <label className="text-sm text-gray-600"> Description</label>
                                                <Textarea
                                                    {...field}
                                                    placeholder="Enter short description"
                                                />
                                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                            </div>
                                        )}
                                    />
                                    <Button
                                        type="button"
                                        onClick={() => remove(index)}
                                        variant="destructive"
                                        className="h-10 w-10 flex items-center justify-center mt-6"
                                        disabled={fields.length === 1}
                                    >
                                        <Trash2 size={18} />
                                    </Button>

                                </div>
                            </div>

                            {/* Delete Button */}

                        </div>
                    ))}

                    {/* Add Off Day Button */}
                    <Button type="button" onClick={() => append({ title: "", description: "", startDate: "", startDay: "", endDate: "", endDay: "", createdBy: "" })} className="mb-4">
                        <SquarePlus /> Add Day
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default OffDay;
