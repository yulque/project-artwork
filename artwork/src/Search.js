import { SearchInput } from "evergreen-ui";

export default function Search({ query, onChange }) {
  return (
    <SearchInput
      placeholder="Edward Hopper"
      width="100%"
      autoFocus
      value={query}
      onChange={onChange}
    />
  );
}
