import clsx from "clsx";

interface TabItem {
  key: string;
  label: string;
}

interface Props {
  tabs: TabItem[];
  currentTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs = ({ tabs, currentTab, onTabChange }: Props) => {
  return (
    <div className="border-b border-slate-400 py-5 flex gap-10">
      {tabs.map((tab) => (
        <button
          className={clsx(
            "text-4xl",
            currentTab === tab.key && "text-[#A7D8FF]",
          )}
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          type="button"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
