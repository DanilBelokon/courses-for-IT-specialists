import {Button, Htag, P, Tag} from "@/components";

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
      <P>
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </P>
      <P size="S">
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </P>
      <P size="L">
        Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и
        ими можно успешно пользоваться дома или в дороге. Современные ноутбуки
        хорошо справляются с нагрузкой, так зачем загонять специалиста в душный
        офис. В этой профессии важным считается вдохновение, поэтому дизайнеры
        ищут его в разных местах.
      </P>
      <Tag size="S">Ghost</Tag>
      <Tag size="M" color="green">
        Green
      </Tag>
      <Tag size="M" color="red">
        {" "}
        Red
      </Tag>
      <Tag size="M" color="gray">
        Gray
      </Tag>
      <Tag color="primary">Primary</Tag>
    </>
  );
}
