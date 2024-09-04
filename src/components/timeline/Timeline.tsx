import { WorkExperience } from "@/interfaces/workExperience";
import moment from "moment";

const Timeline = ({ items }: { items: WorkExperience[] }) => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {items.length > 0 &&
        items.map((item) => (
          <li key={item.title + "-" + item.company} className="mb-10 ml-4">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {moment(item.start_date).format("LL")}
            </time>
            <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"> to </span>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.end_date ? moment(item.end_date).format("LL") : "Present"}
            </time>
            <h3 className="text-lg font-semibold text-blue-400">
              {item.title} - {item.company}
            </h3>
            <div className="mb-4 ml-4 text-base font-normal text-gray-700">{item.description}</div>
          </li>
        ))}
    </ol>
  );
};

export default Timeline;
