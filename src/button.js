import Button from '@mui/material/Button';

export default function StyledButton({text}) {
  return (
    <Button className="button">{text}</Button>
  );
}