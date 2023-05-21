import Button from '@mui/material/Button';


export default function StyledButton({text}) {
  return (
    <Button variant="outlined">
      {text}
    </Button>
  );
}