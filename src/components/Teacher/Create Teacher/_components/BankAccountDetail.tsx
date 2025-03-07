import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues} from "react-hook-form";
import { UserRoundCogIcon } from "lucide-react";
 
 

interface PersonalInfoProps {
    control: Control<FieldValues>;  // Use react-hook-form's Control typ
     
}

const BankAccountDetail = ({ control }: PersonalInfoProps) => {
    return (
        <div className="p-6 bg-white">
            <div className="border rounded-md">
                <div className="p-4 bg-[#E9EDF4] rounded-md rounded-b-none flex items-center gap-2 mb-5">
                    <UserRoundCogIcon className="w-5 h-5" /> Bank Account Details
                </div>


                <div className="m-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { name: "accountName", label: "Account Name" },
                        { name: "accountNumber", label: "Account Number" },
                        { name: "bankName", label: "Bank Name" },
                        { name: "IFSCCode", label: "IFSC Code" },
                        { name: "branchName", label: "Branch Name" }
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


                </div>

            </div>
        </div>
    );
};

export default BankAccountDetail;
