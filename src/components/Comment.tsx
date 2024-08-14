import { Smiley } from "@phosphor-icons/react";
import { useAuth } from "../hooks/useAuth";

const Comment = ({
  photoURL,
  displayName,
  content,
  images,
  createdAt,
  commentId,
}: {
  photoURL: string;
  displayName: string;
  content: string;
  images: [];
  createdAt: string;
  commentId: string;
}) => {
  const { user } = useAuth();

  if (!user) {
    return;
  }
  const handleReply = ({ commentId }: { commentId: string }) => {
    console.log(commentId);
  };
  return (
    <div className="max-w-full space-y-5">
      <div className="inline-flex items-center space-x-2">
        <img
          src={photoURL}
          alt={displayName}
          className="rounded-full w-9 h-9"
        />
        <span>{user.displayName}</span>
      </div>
      <div className="text-gray-500 font-semibold text-base">{content}</div>
      <div className="flex items-center space-x-2">
        {images.map((eachUrl) => (
          <img
            src={eachUrl}
            className="aspect-square object-cover h-20 rounded-2xl"
          ></img>
        ))}
      </div>
      <div className="flex items-center space-x-5 text-sm">
        <Smiley size={20} className="text-gray-600 cursor-pointer" />
        <span className="text-gray-300">|</span>
        <span
          className="text-gray-600 cursor-pointer"
          onClick={() => handleReply({ commentId })}
        >
          Reply
        </span>
        <span className="text-gray-300">|</span>
        <span className="text-gray-400 cursor-pointer">{createdAt}</span>
      </div>
    </div>
  );
};

export default Comment;
