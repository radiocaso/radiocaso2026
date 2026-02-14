export default function Tag({
  tag,
  variant = "tag",
}: {
  tag: string;
  variant?: "tag" | "transmissionType";
}) {
  return (
    <div
      className={`${variant === "transmissionType" ? "bg-orange-600" : "bg-green-700"} text-bg rounded px-2 lowercase`}
    >
      {tag}
    </div>
  );
}
