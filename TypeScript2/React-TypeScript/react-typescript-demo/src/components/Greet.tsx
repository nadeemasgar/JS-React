// Typing the basic data type props
type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome {props.name}! You have {props.messageCount} unread messages`
          : `Welcome Guests`}
      </h2>
    </div>
  );
};

// Types vs Interfaces ??
//  Use Types to build the application and interfaces to build libraries
