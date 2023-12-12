import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
    ArrowsRightLeftIcon,
  Bars3Icon,
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
  Squares2X2Icon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React from "react";
const supportLinks = [
  {
    name: "Board Management",
    href: "#",
    description:
      "Manage related tasks by grouping them on boards. This app lets the user create, update and delete boards as necessary.",
    icon: Squares2X2Icon,
  },
  {
    name: "Task Management",
    href: "#",
    description:
      "Manage different tasks. Create, update, and delete tasks as necessary. This app allows to group tasks visually in lists for better management.",
    icon: SquaresPlusIcon,
  },
  {
    name: "Interactive Interface",
    href: "#",
    description:
      "Users are able to drag and drop tasks between lists.",
    icon: ArrowsRightLeftIcon,
  },
];

const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "Why do you never see elephants hiding in trees?",
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      "Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 5,
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 6,
    question: "Why did the invisible man turn down the job offer?",
    answer:
      "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];
const AboutPage = () => {
  return (
    <div>
      <section
        className="mx-auto max-w-md divide-y-2 divide-slate-200 px-6  sm:max-w-3xl lg:max-w-7xl lg:px-8 "
        aria-labelledby="faq-heading"
      >
        <h2
          className="text-3xl font-bold tracking-tight text-slate-900"
          id="faq-heading"
        >
          About the KanBan App
        </h2>
        <div className="mt-6 pt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:grid-rows-1 md:gap-x-8 md:gap-y-12 md:space-y-0">
            <div>
              <dt className="text-lg font-medium text-slate-900">
                What is a KanBan App?
              </dt>
              <dd className="mt-2 text-base text-slate-500">
                Kanban (Japanese: 看板, meaning signboard or billboard) is a
                lean method to manage and improve work across human systems.
                This approach aims to manage work by balancing demands with
                available capacity, and by improving the handling of
                system-level bottlenecks.
              </dd>
            </div>
            <div>
              <dt className="text-lg font-medium text-slate-900">
                Team Members
              </dt>
              <dd className="mt-2 text-base text-slate-500">
                Angel, Pierre, Wellington.
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <section
        className="relative z-10 mx-auto lg:px-8 pt-32 pb-32"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col rounded-2xl bg-white shadow-xl"
            >
              <div className="relative flex-1 px-6 pb-8 pt-16 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-main-800 p-5 shadow-lg">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-slate-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-slate-500">
                  {link.description}
                </p>
              </div>
              {/* <div className="rounded-bl-2xl rounded-br-2xl bg-slate-50 p-6 md:px-8">
                <a
                  href={link.href}
                  className="text-base font-medium text-blue-700 hover:text-blue-600"
                >
                  Contact us
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
