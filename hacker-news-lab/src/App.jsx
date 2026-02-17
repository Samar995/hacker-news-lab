/* Each story has:
 objectID -> unique id (used as key)
 title -> article title
 url -> link to the article
 author -> who posted it
 points -> score
 num_comments -> number of comments

 objectID is used as the key because it is unique
 This structure is similar to real API data */

const stories = [
  {
    objectID: "1",
    title: "story1",
    url: "http:/story1.tn",
    author: "writer1",
    points: 120,
    num_comments: 30,
  },
  {
    objectID: "2",
    title: "story2",
    url: "http:/secondstory.com",
    author: "second_writer",
    points: 98,
    num_comments: 16,
  },
];

function App() {
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

export default App;

/*
map() is used because it returns a new array that React can render.

objectID is the correct key because it uniquely identifies each story.

Later, this fake data will be replaced by data coming from the
Hacker News API.
*/
