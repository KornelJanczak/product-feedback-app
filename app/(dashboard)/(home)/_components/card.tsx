type sectionUser = {
  userId: string;
  feedbackSectionId: string;
}[];

interface ICard {
  id: string;
  title: string;
  members: sectionUser;
  admins: sectionUser;
}

export default function Card({ id, title, members, admins }: ICard) {

    console.log(members);
    

  return (
    <div className="bg-darkWhite rounded">
      <h2 className="text-dark text-lg sm:text-xl md:text-2xl">{title}</h2>
    </div>
  );
}
