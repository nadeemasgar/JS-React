type GreetProps = {
  name: string;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Welcome {props.name}! How are you</h2>
    </div>
  );
};

// Types vs Interfaces ??
//  Use Types to build the application and interfaces to build libraries
