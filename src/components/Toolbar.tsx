import { Dispatch, SetStateAction } from "react";

type ToolbarProps = {
  setApiRequest: Dispatch<SetStateAction<string>>;
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
  theme: string;
};

function Toolbar({ setApiRequest, setTheme, theme }: ToolbarProps) {
  let emoji: string;
  if (theme === "light") {
    emoji = "🌙";
  } else {
    emoji = "☀";
  }

  return (
    <div className="navbar navbar-center bg-base-100 gap-2">
      <button
        className="btn btn-accent"
        onClick={() => setApiRequest("topRated")}
      >
        Top Rated
      </button>
      <button
        className="btn btn-accent"
        onClick={() => setApiRequest("trendingThisWeek")}
      >
        Trending this week
      </button>
      <button
        className="btn btn-accent"
        onClick={() =>
          setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
        }
      >
        {emoji}
      </button>
    </div>
  );
}

export default Toolbar;
