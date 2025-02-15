import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues, useForm, UseFormSetValue, UseFormTrigger } from "react-hook-form";
import { UserRoundCogIcon } from "lucide-react";
import DynamicSelect from "@/components/Reusable/DynamicSelect";

const occupations = [
    "Agricultural Laborer", "Bank Manager", "Construction Worker", "Doctor", "Driver", "Engineer",
    "Factory Worker", "Journalist", "Lawyer", "Mid-Level Manager", "Nurse", "Others",
    "Pharmacist", "School Teacher", "Street Vendor", "University Professor"
];

interface PersonalInfoProps {
    control: Control<FieldValues>;  // Use react-hook-form's Control type

    setValue: UseFormSetValue<FieldValues>; // Type-safe function for setting form values
    trigger: UseFormTrigger<FieldValues>; // Added trigger function
}

const PayrollInformation = ({ control, setValue, trigger }: PersonalInfoProps) => {
    return (
        <div className="p-6 bg-white">
            <div className="border rounded-md">
                <div className="p-4 bg-[#E9EDF4] rounded-md rounded-b-none flex items-center gap-2 mb-5">
                    <UserRoundCogIcon className="w-5 h-5" /> Payroll Information
                </div>

                {/* Payroll Info */}

                <div className="m-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <div>
                        <label className="text-sm text-gray-600">EPF No (Optional)</label>
                        <Controller
                            name="EPFNo"
                            control={control}

                            render={({ field }) => (
                                <>
                                    <Input {...field} placeholder={`Enter EPFNo`} />

                                </>
                            )}
                        />
                    </div>
                    {[

                        { name: "basicSalary", label: "Basic Salary" },
                        { name: "workLocation", label: "Work Location" },

                    ].map(({ name, label }) => (
                        <div key={name}>
                            <label className="text-sm text-gray-600">{label}</label>
                            <Controller
                                name={name}
                                control={control}
                                rules={{ required: `${label} is required` }}
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input {...field} placeholder={`Enter ${label}`} />
                                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                    </>
                                )}
                            />
                        </div>
                    ))}

                    {/* Contract Type Select */}
                    <Controller
                        name="contractType"
                        control={control}
                        rules={{ required: "Contract Type is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <div>
                                <DynamicSelect
                                    label="Contract Type"
                                    placeholder="Select Contract Type"
                                    options={occupations}
                                    value={field.value}
                                    onChange={(val) => {
                                        setValue("contractType", val);
                                        trigger("contractType"); // Remove error when selecting a value
                                    }}
                                />
                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                            </div>
                        )}
                    />
                    {/* Work Shift */}
                    <Controller
                        name="workShift"
                        control={control}
                        rules={{ required: "Work Shift is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <div>
                                <DynamicSelect
                                    label="Work Shift"
                                    placeholder="Select Work Shift"
                                    options={occupations}
                                    value={field.value}
                                    onChange={(val) => {
                                        setValue("workShift", val);
                                        trigger("workShift"); // Remove error when selecting a value
                                    }}
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

export default PayrollInformation;
