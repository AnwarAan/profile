export const TechStack = ({ tech }: { tech: string[] }) => {
  return (
    <div className="flex flex-wrap">
      {tech.map((item, i) => (
        <p className="mx-2 md:mx-4 bg-yellow-300 mb-2 p-1" key={i}>
          {item}
        </p>
      ))}
    </div>
  );
};
