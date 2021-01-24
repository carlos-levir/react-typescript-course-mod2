interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button>{children}</button>
  );
}

export default Button;

function teste() {
  return (
    <Button onClick={() => { }}>teste</Button>
  )
}