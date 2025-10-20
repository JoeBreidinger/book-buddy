import useQuery from "./api/useQuery";

export default function Account() {
  const { data: account, loading, error } = useQuery("/users/me");

  if (loading || !account) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <article>
      <h1>
        Welcome, {account.firstname} {account.lastname}
      </h1>
      <p>Your email on file is: {account.email}</p>
    </article>
  );
}
