"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const books = [
  {
    id: 1,
    title: "The Hunger Games",
    authors: "Suzanne Collins",
    description:
      "Winning will make you famous. Losing means certain death.The nation of Panem, formed from a post-apocalyptic North America, is a country that consists of a wealthy Capitol region surrounded by 12 poorer districts. Early in its history, a rebellion led by a 13th district against the Capitol resulted in its destruction and the creation of an annual televised event known as the Hunger Games. In punishment, and as a reminder of the power and grace of the Capitol, each district must yield one boy and one girl between the ages of 12 and 18 through a lottery system to participate in the games. The 'tributes' are chosen during the annual Reaping and are forced to fight to the death, leaving only one survivor to claim victory.When 16-year-old Katniss's young sister, Prim, is selected as District 12's female representative, Katniss volunteers to take her place. She and her male counterpart Peeta, are pitted against bigger, stronger representatives, some of whom have trained for this their whole lives. , she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    edition: "",
    format: "Hardcover",
    num_pages: 374,
    rating: 4.33,
    rating_count: 5519135,
    review_count: 160706,
    genres:
      "Young Adult, Fiction, Science Fiction, Dystopia, Fantasy, Science Fiction",
    genre_list: "Young Adult,Fiction,Science Fiction,Dystopia,Fantasy",
    image_url: "https://images.gr-assets.com/books/1447303603l/2767052.jpg",
    Quote1: "“You don’t forget the face of the person who was your last hope.”",
    Quote2:
      "“Remember, we're madly in love, so it's all right to kiss me anytime you feel like it.”",
    Quote3: "“May the odds be ever in your favor!”",
  },
  {
    id: 2,
    title: "Harry Potter and the Order of the Phoenix",
    authors: "J.K. Rowling",
    description:
      "There is a door at the end of a silent corridor. And it’s haunting Harry Pottter’s dreams. Why else would he be waking in the middle of the night, screaming in terror?Harry has a lot on his mind for this, his fifth year at Hogwarts: a Defense Against the Dark Arts teacher with a personality like poisoned honey; a big surprise on the Gryffindor Quidditch team; and the looming terror of the Ordinary Wizarding Level exams. But all these things pale next to the growing threat of He-Who-Must-Not-Be-Named---a threat that neither the magical government nor the authorities at Hogwarts can stop.As the grasp of darkness tightens, Harry must discover the true depth and strength of his friends, the importance of boundless loyalty, and the shocking price of unbearable sacrifice.His fate depends on them alll.(back cover)",
    edition: "US Edition",
    format: "Paperback",
    num_pages: 870,
    rating: 4.48,
    rating_count: 2041594,
    review_count: 33264,
    genres: "Fantasy, Young Adult, Fiction",
    genre_list: "Fantasy,Young Adult,Fiction",
    image_url: "https://images.gr-assets.com/books/1255614970l/2.jpg",
    Quote1: "“Wit beyond measure is man’s greatest treasure.”",
    Quote2:
      "“Indifference and neglect often do much more damage than outright dislike.”",
    Quote3:
      "“Things we lose have a way of coming back to us in the end, if not always in the way we expect.”",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    authors: "Harper Lee",
    description:
      "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.",
    edition: "50th Anniversary",
    format: "Paperback",
    num_pages: 324,
    rating: 4.27,
    rating_count: 3745197,
    review_count: 79450,
    genres:
      "Classics, Fiction, Historical, Historical Fiction, Academic, School",
    genre_list:
      "Classics,Fiction,Historical,Historical Fiction,Academic,School",
    image_url: "https://images.gr-assets.com/books/1361975680l/2657.jpg",
    Quote1:
      "“Until I feared I would lose it, I never loved to read. One does not love breathing.”",
    Quote2:
      "“People generally see what they look for, and hear what they listen for.”",
    Quote3:
      "“The one thing that doesn't abide by majority rule is a person's conscience.”",
  },
  {
    id: 8,
    title: "Animal Farm",
    authors: "George Orwell",
    description:
      "A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned –a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible.\nWhen Animal Farm was first published, Stalinist Russia was seen as its target. Today it is devastatingly clear that wherever and whenever freedom is attacked, under whatever banner, the cutting clarity and savage comedy of George Orwell’s masterpiece have a meaning and message still ferociously fresh.",
    edition: "",
    format: "Paperback",
    num_pages: 122,
    rating: 3.9,
    rating_count: 2235084,
    review_count: 42156,
    genres:
      "Classics, Fiction, Science Fiction, Dystopia, Fantasy, Literature, Academic, School, Politics, Science Fiction, Novels, Academic, Read For School",
    genre_list:
      "Classics,Fiction,Science Fiction,Dystopia,Fantasy,Literature,Academic,School,Politics,Novels,Read For School",
    image_url: "https://images.gr-assets.com/books/1424037542l/7613.jpg",
    Quote1:
      "“Until I feared I would lose it, I never loved to read. One does not love breathing.”",
    Quote2:
      "“People generally see what they look for, and hear what they listen for.”",
    Quote3:
      "“The one thing that doesn't abide by majority rule is a person's conscience.”",
  },
  {
    id: 5,
    title: "Twilight",
    authors: "Stephenie Meyer",
    description:
      "About three things I was absolutely positive.First, Edward was a vampire.Second, there was a part of him—and I didn't know how dominant that part might be—that thirsted for my blood.And third, I was unconditionally and irrevocably in love with him.In the first book of the Twilight Saga, internationally bestselling author Stephenie Meyer introduces Bella Swan and Edward Cullen, a pair of star-crossed lovers whose forbidden relationship ripens against the backdrop of small-town suspicion and a mysterious coven of vampires. This is a love story with bite.",
    edition: "",
    format: "Paperback",
    num_pages: 498,
    rating: 3.58,
    rating_count: 4281268,
    review_count: 97991,
    genres:
      "Young Adult, Fantasy, Romance, Paranormal, Vampires, Fiction, Fantasy, Paranormal",
    genre_list: "Young Adult,Fantasy,Romance,Paranormal,Vampires,Fiction",
    image_url: "https://images.gr-assets.com/books/1361039443l/41865.jpg",
    Quote1: "“I like the night. Without the dark, we'd never see the stars.”",
    Quote2:
      "“I decided as long as I'm going to hell, I might as well do it thoroughly.”",
    Quote3:
      "“When life offers you a dream so far beyond any of your expectations, it’s not reasonable to grieve when it comes to an end.”",
  },
];

export default function Carousel() {
  const theme = useSelector((state)=> state.theme.darkMode)
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextSlide =
        currentSlide === books.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(nextSlide);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="mt-5">
      <header className="w-full h-[250px] relative overflow-hidden">
        <div className="w-full h-full flex justify-center items-center">
          {books.map((element, index) => (
            <div
              key={index}
              className={`${theme? 'bg-[#323232]':'bg-white'} absolute transition-opacity  duration-1000 ease-in-out  flex rounded-xl overflow-hidden  border-2 border-[#161616] p-1 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ height: "100%", width: "95%" }}
            >
              <div className="w-[50%] overflow-hidden">
                <img
                  src={element.image_url}
                  alt=""
                  className="rounded-lg w-full h-full overflow-hidden object-fill"
                />
              </div>
              <div className="w-[50%] p-3">
                <p className="mb-2 text-[18px]">
                  Title: <span className="text-[14px]">{element.title} </span>
                </p>
                <p className="text-[18px]">
                  Authors: <span className="text-[14px]">{element.authors}</span>
                </p>
                <p className="text-[18px]">
                  Description: <span className="text-[14px] line-clamp-2">{element.description}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}
