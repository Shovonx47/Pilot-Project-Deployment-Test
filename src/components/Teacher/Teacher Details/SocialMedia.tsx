interface DataProps {
    data: {
      Facebook: string;
      Twitter: string;
      LinkedIn: string;
      Youtube: string;
      Instagram: string;
    }
  }
  
  export default function WorkDetails({ data }: DataProps) {
    return (
      <div className="p-4 border rounded-lg bg-white shadow-md">
        <h3 className="text-lg mb-4">Social Media</h3>
        <hr className="border-gray-200 -mx-4 mb-3" />
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-x-4">
          <div>
            <p className="text-sm text-headerText mb-2">Facebook</p>
            <p className="text-dataText">{data.Facebook}</p>
          </div>
          <div>
            <p className="text-sm text-headerText mb-2">Twitter</p>
            <p className="text-dataText">{data.Twitter}</p>
          </div>
          <div>
            <p className="text-sm text-headerText mb-2">LinkedIn</p>
            <p className="text-dataText">{data.LinkedIn}</p>
          </div>
          <div>
            <p className="text-sm text-headerText mb-2">Youtube</p>
            <p className="text-dataText">{data.Youtube}</p>
          </div>
          <div>
            <p className="text-sm text-headerText mb-2">Instagram</p>
            <p className="text-dataText">{data.Instagram}</p>
          </div>
        </div>
      </div>
    );
  }