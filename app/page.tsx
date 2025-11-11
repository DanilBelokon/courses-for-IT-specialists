import {Button, Htag} from "@/components";

export default function Home() {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary" arrow="down">
        Кнока
      </Button>
      <Button appearance="ghost" arrow="right">
        Кнока
      </Button>
    </>
  );
}
