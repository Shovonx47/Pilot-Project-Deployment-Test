import Image from 'next/image';

interface Parent {
  name: string;
  relation: string;
  avatar: string;
  phone: string;
  email: string;
}

interface ParentsProps {
  parents: {
    fatherName: string;
    fatherEmail: string;
    fatherContactNumber: string;
    fatherOccupation: string;
    fatherNidNumber: string;

    motherName: string;
    motherEmail: string;
    motherContactNumber: string;
    motherOccupation: string;
    motherNidNumber: string;

    localGuardianName: string;
    relationshipWithLocalGuardian: string;
    localGuardianEmail: string;
    localGuardianContactNumber: string;
    localGuardianOccupation: string;
    localGuardianNidNumber: string;
  };
}

export default function ParentsInformation({ parents }: ParentsProps) {
  // Convert parents object into an array to use .map()
  const parentList: Parent[] = [
    {
      name: parents.fatherName,
      relation: 'Father',
      avatar: 'https://res.cloudinary.com/dfunuoqfv/image/upload/v1739459701/e11e9ztb1d3z3imbzj3g.png',  
      phone: parents.fatherContactNumber,
      email: parents.fatherEmail,
    },
    {
      name: parents.motherName,
      relation: 'Mother',
      avatar: 'https://res.cloudinary.com/dfunuoqfv/image/upload/v1739459701/e11e9ztb1d3z3imbzj3g.png',  
      phone: parents.motherContactNumber,
      email: parents.motherEmail,
    },
    {
      name: parents.localGuardianName,
      relation: parents.relationshipWithLocalGuardian || 'Local Guardian',
      avatar: 'https://res.cloudinary.com/dfunuoqfv/image/upload/v1739459701/e11e9ztb1d3z3imbzj3g.png', 
      phone: parents.localGuardianContactNumber,
      email: parents.localGuardianEmail,
    },
  ];

  return (
    <div className="space-y-4 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div>
        <h3 className="text-lg font-semibold mb-3 text-headerText">Parents Information</h3>
        <hr className="border-gray-200 -mx-6 mb-3" />
      </div>
      <div className="space-y-4">
        {parentList.map((parent, index) => (
          <div
            key={index}
            className="flex items-center gap-8 p-4 border rounded-lg flex-col sm:flex-row"
          >
            <div className="flex items-center gap-4 flex-1">
              <Image
                src={parent.avatar}
                alt={parent.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-headerText">{parent.name}</p>
                <p className="text-sm text-blue-600">{parent.relation}</p>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-md text-headerText mb-1 font-semibold">Phone</p>
              <p className="text-dataText">{parent.phone}</p>
            </div>
            <div className="flex-1">
              <p className="text-md text-headerText mb-1 font-semibold">Email</p>
              <p className="text-dataText">{parent.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
