import { useState } from "react";
import { useApi } from "./ApiContext";

// Component returns a function to mutate some data via the API
// and state that tracks the response to mutation request

export default function useMutation(method, resource, tagsToInvalidate) {
  const { request, invalidateTags } = useApi();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async (body) => {
    setLoading(true);
    setError(null);
    try {
      const result = await request(resource, {
        method,
        body: JSON.stringify(body),
      });
      setData(result);
      invalidateTags(tagsToInvalidate);
      return true;
    } catch (e) {
      console.error(e);
      setError.error(e.message);
    } finally {
      setLoading(false);
    }
    return false;
  };

  return { mutate, data, loading, error };
}
