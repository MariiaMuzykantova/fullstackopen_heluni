const Content = ({ anecdote, voteInfo }) => (
  <>
    <div>{anecdote}</div>
    <div>{`has ${voteInfo} votes`}</div>
  </>
);

export default Content;
