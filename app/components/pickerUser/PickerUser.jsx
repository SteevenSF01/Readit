import Image from "next/image";

export default function PickerUser() {
  const users = [
    {
      id: 1,
      name: "@JuanPerez",
      bookread: 3505,
    },
    {
      id: 2,
      name: "@AnaGutierrez",
      bookread: 2206,
    },
    {
      id: 3,
      name: "@PedroGomez",
      bookread: 2105,
    },
    {
      id: 4,
      name: "@MariaLopez",
      bookread: 1860,
    },
    {
      id: 5,
      name: "@JoseMartin",
      bookread: 1505,
    },
  ];

  return (
    <>
      <section className="flex flex-wrap justify-center">
        {users.map((user, i) => {
          return (
            <div
              key={i}
              className="flex gap-x-6 items-center py-3 px-4 w-[80%]  border-b-2"
            >
              <p>{user.id}.</p>
              <Image
              src={`/images/user${user.id}.png`}
              alt={`Imagen de ${user.name}`}
              width={70}
              height={70}
              />
              <div className="ms-3">
                <h1>{user.name}</h1>
                <p>{user.bookread} : books</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
