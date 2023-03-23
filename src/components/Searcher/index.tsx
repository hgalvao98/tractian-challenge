import Search from "antd/es/input/Search";

export const Searcher = ({
  className,
  placeholder,
  onSearch,
  selectBefore,
}) => {
  return (
    <div className={`${className}__search`}>
      <h1>Search:</h1>
      <Search
        addonBefore={selectBefore}
        placeholder={placeholder}
        allowClear
        onSearch={onSearch}
      />
    </div>
  );
};

{
  /* <div className="assets__search">
<h1>Search:</h1>
<Search placeholder="Asset" allowClear onSearch={onSearch} />
</div>

<div className="unit__search">
        <h1>Search:</h1>
        <Search placeholder="Units" allowClear onSearch={onSearch} />
      </div>

<div className="user__search">
<h1>Search:</h1>
<Search
  addonBefore={selectBefore}
  placeholder="Users"
  allowClear
  onSearch={onSearch}
/>
</div>

<div className="workorder__search">
        <h1>Search:</h1>
        <Search
          addonBefore={selectBefore}
          placeholder="Workorders"
          allowClear
          onSearch={onSearch}
        />
      </div> */
}
