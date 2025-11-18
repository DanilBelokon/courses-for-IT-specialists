"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <div>Что то пошло не так</div>
      <div>{JSON.stringify(error)}</div>
      <button onClick={() => reset()}>again</button>
    </div>
  );
}
