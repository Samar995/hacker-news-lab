/* Each story has:
   objectID -> unique id (used as key)
   title -> article title
   url -> link to the article
   author -> who posted it
   points -> score
   num_comments -> number of comments

   objectID is used as the key because it is unique
   This structure is similar to real API data
*/

const stories = [
  {
    objectID: "1",
    title: "story1",
    url: "http://story1.tn",
    author: "writer1",
    points: 120,
    num_comments: 30,
  },
  {
    objectID: "2",
    title: "story2",
    url: "http://secondstory.com",
    author: "second_writer",
    points: 98,
    num_comments: 16,
  },
];

function List() {
  return (
    <div>
      {stories.map((item) => {
        return (
          <div key={item.objectID}>
            <h3>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </h3>

            <p>Author: {item.author}</p>
            <p>Points: {item.points}</p>
            <p>Comments: {item.num_comments}</p>
          </div>
        );
      })}
    </div>
  );
}

const Search = () => {
  const handleChange = (event) => {
    console.log(event);
  };
  return (
    <div>
      <label>Search: </label>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

const Header = () => <h1>Hacker News</h1>;

const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <List />
    </div>
  );
}

export default App;

/*
App is responsible for organizing the page.

List is responsible for rendering the stories.

Search is responsible for displaying the search input.

This structure is cleaner because each component has one job
and the App component is easier to read.
*/

