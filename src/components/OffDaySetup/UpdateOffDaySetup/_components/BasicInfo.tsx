import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues, UseFormGetValues, UseFormSetValue, UseFormTrigger } from "react-hook-form";
import { InfoIcon } from "lucide-react";
import DynamicSelect from "@/components/Reusable/DynamicSelect";
import { DatePickerForm } from "@/components/Reusable/DatePickerForm";
import { Textarea } from "@/components/ui/textarea";


const subject = ["A", "B", "C", "D", "E"];

interface ExamSchedule {
    data: {
        class: string;
        examName: string;
        examYear: string;
        startDate: string; // Assuming dates are stored as strings (e.g., "2025-02-15")
        endDate: string;
        createdBy: string;
        description: string;
    };
}


interface BasicInfoProps {
    control: Control<FieldValues>;  // Use react-hook-form's Control type
    watch: (name: string) => any;  // Adjust return type based on expected data
    getValues: UseFormGetValues<FieldValues>; // Type-safe function for getting form values
    setValue: UseFormSetValue<FieldValues>; // Type-safe function for setting form values
    trigger: UseFormTrigger<FieldValues>; // Add trigger for validation
    singleExamSchedule: ExamSchedule
}

const BasicInfo = ({ control, setValue, trigger, getValues, singleExamSchedule }: BasicInfoProps) => {
    return (
        <div className="p-6 bg-white">
            <h2 className="text-xl font-semibold text-gray-800 pb-2">
                Exam routine details
            </h2>
            <div className="border rounded-md">
                <div className="p-4 bg-[#E9EDF4] rounded-md rounded-b-none flex items-center gap-2 mb-5">
                    <InfoIcon className="h-5 w-5" /> Basic Information
                </div>


                <div className="m-4 grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* class Select */}
                    <Controller
                        name="class"
                        control={control}
                        defaultValue={singleExamSchedule?.data?.class || ""}
                        rules={{ required: "Class is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <div>
                                <DynamicSelect
                                    label="Class"
                                    placeholder="Select Class"
                                    options={subject}
                                    value={field.value}
                                    onChange={(val) => {
                                        setValue("class", val);
                                        trigger("class");
                                    }}
                                />
                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                            </div>
                        )}
                    />
                    {/* exam name */}
                    <Controller
                        name="examName"
                        control={control}
                        defaultValue={singleExamSchedule?.data?.examName || ""}
                        rules={{ required: "Exam Name is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <div>
                                <label className="text-sm text-gray-600">Exam Name</label>
                                <Input
                                    {...field}
                                    placeholder="Enter Exam Name"
                                />
                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                            </div>
                        )}
                    />

                    {/* exam year */}
                    <Controller
                        name="examYear"
                        control={control}
                        defaultValue={singleExamSchedule?.data?.examYear || ""}
                        rules={{ required: "Exam Year is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <div>
                                <label className="text-sm text-gray-600">Exam Year</label>
                                <Input
                                    {...field}
                                    placeholder="Enter exam year"
                                />
                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                            </div>
                        )}
                    />
                    {/* Start Date */}
                    <Controller
                        name={`startDate`}
                        control={control}
                        defaultValue={singleExamSchedule?.data?.startDate || ""}
                        rules={{
                            required: "Start Date is required",
                            validate: (value) => {
                                const endDate = getValues(`endDate`);
                                if (endDate && value > endDate) {
                                    return "Start Date cannot be greater than End Date.";
                                }
                                return true;
                            },
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div>
                                <DatePickerForm
                                    value={field.value}
                                    onChange={(formattedDate) => {
                                        setValue(`startDate`, formattedDate);
                                        trigger(`startDate`);
                                        trigger(`endDate`); // Revalidate End Date
                                    }}
                                    label="Start Date"
                                />
                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                            </div>
                        )}
                    />

                    {/* End Date */}
                    <Controller
                        name={`endDate`}
                        control={control}
                        defaultValue={singleExamSchedule?.data?.endDate || ""}
                        rules={{
                            required: "End Date is required",
                            validate: (value) => {
                                const startDate = getValues(`startDate`);
                                if (startDate && value < startDate) {
                                    return "End Date cannot be earlier than Start Date.";
                                }
                                return true;
                            },
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div>
                                <DatePickerForm
                                    value={field.value}
                                    onChange={(formattedDate) => {
                                        setValue(`endDate`, formattedDate);
                                        trigger(`startDate`); // Revalidate Start Date
                                        trigger(`endDate`);
                                    }}
                                    label="End Date"
                                />
                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                            </div>
                        )}
                    />
                    <Controller
                        name="createdBy"
                        control={control}
                        defaultValue={singleExamSchedule?.data?.createdBy || ""}
                        rules={{ required: "CreatedBy is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <div>
                                <label className="text-sm text-gray-600">Created By</label>
                                <Input
                                    {...field}
                                    placeholder="Enter your Name"
                                />
                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                            </div>
                        )}
                    />
                </div>
                <div className="m-4">
                    {/*description */}
                    <Controller
                        name="description"
                        control={control}
                        defaultValue={singleExamSchedule?.data?.description || ""}
                        rules={{ required: "Description is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <div>
                                <label className="text-sm text-gray-600"> Description</label>
                                <Textarea
                                    {...field}
                                    placeholder="Enter short description"
                                />
                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                            </div>
                        )}
                    />

                </div>
            </div>
        </div>
    );
};

export default BasicInfo;