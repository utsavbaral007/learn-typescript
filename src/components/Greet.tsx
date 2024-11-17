interface GreetProps {
  username?: string;
  messageLength?: number;
  loggedIn: boolean;
}

const Greet = ({ username, messageLength, loggedIn }: GreetProps) => {
  return (
    <div className="max-w-[600px] text-center">
      {loggedIn ? (
        <p className="text-3xl">
          Hi! my name is {username} and I have {messageLength} unread messages!
        </p>
      ) : (
        <p className="text-3xl">Please log in to continue</p>
      )}
    </div>
  );
};

export default Greet;
