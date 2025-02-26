interface NotificationProps {
    name: string;
    message?: string;
    updatedDate?: string;
  }
  
  const MorningNotification = ({
    name,
    message = "Have a Good day at work",
    updatedDate = "15 Feb 2025"
  }: NotificationProps) => {
    return (
      <div className="bg-[#202C4B] text-white p-4 w-full relative rounded-sm">
        <div className="absolute top-8 right-4 text-xs text-white">
          Updated Recently on {updatedDate}
        </div>
        <h1 className="text-2xl font-semibold mb-2">
          Welcome Back, Mr. {name}
        </h1>
        <p className="text-white/90 text-sm">
          {message}
        </p>
      </div>
    );
  };
  
  export default MorningNotification;