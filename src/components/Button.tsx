type ButtonProps = Readonly<{
  name: string;
  className?: string;
}>;

export const Button = ({ name }: ButtonProps) => {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded">{name}</button>
  );
};
