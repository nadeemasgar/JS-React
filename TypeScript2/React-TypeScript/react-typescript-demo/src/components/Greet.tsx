// Typing the basic data type props
type GreetProps = {
  name: string;
  messageCount?: number; // optional props
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  let { messageCount = 0 } = props; // if messageCount is passed then used that value otherwise use 0 as default value
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${messageCount} unread messages`
          : `Welcome Guests`}
      </h2>
    </div>
  );
};

// Types vs Interfaces ??
//  Use Types to build the application and interfaces to build libraries
