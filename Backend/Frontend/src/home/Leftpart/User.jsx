import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACUCAMAAAC+99ssAAAAM1BMVEWpqan4+Pj///+mpqb8/Pyjo6Ovr6+goKDR0dHZ2dm6urr19fXDw8Pr6+vk5OTd3d3Ly8sW3/A3AAADzElEQVR4nO2b27KrIAxAgRBELur/f+0Bu7t721ZACc4Z1ktf1wRIAqaMdTqdTqfT6XQ6nU6n0+n8hwDgMAyI0FrkHQCmjNPzNE2zXoxScB1FRKMnKx5IPzo2tNZaAaa9FO9IPivWPICgNP9Q+2Ey2FYOnd1yE1LIseX+AzVtut3gppne4DYX9RHAsdHpgGXXbd19TQ4HjklyQvgGeqDFZx65SvQSl/UePVrQJEcuMpMeDVD7p/WFhXRt5zw5wRWdG7hMuXAy6IoabpevTciKBup8uZBWqPAFdsLRBA9cTjJ5BI9m58FeY7IB0bEtkxOaInhZNewZT7HxsHBhhVUUegXJ7gbBqQWTWWIfaAK7snwSmavLlR8KkjYPSsrYDUtgl3qd+ISgjTpgJ6vLHbK7dOwsgV35qaA4s+X5jqABBVNsNxLUWVVcZwkqGYOivj0gKS4+ya877xAc2YAptJtIniuw8FjQXMoKM54kujGW9Z8U+WTVK7lZcEMjx0AV2M1kzzxDQfCo3FhJvVgIP/uEy0VeWqF9OR7yHj85yUX7iYxqK6Uj/pwH6VtPkjQnxXokj0/veiZNT9JHLoJJnZ5s9QkZ2H6rZxt+38ad1ZVj0/kPYNtjARcYDPgZW/ijcsjJXGEqBWGZ3hdYem2GC7hFAJQbH0Mpdl6MutTAUZyBQqYCMAxXiVqn0+l0OqnAL7Gruv1eAgAEpYxbtB7nlVFr54xizUePQ8kP7cnkLZcvcM6tn0MXNbSKIqAyyyTjbZr/SWyp/GgU0HfIiKGl41tiT4YytHuMtKcCZkYrd9XuhpJPhmx+EVlY0ESz3xB6rUjmUUCHM5DldgugHasP56PRBWp3wbnqFTLGrdRt9bP1ZssBXHHc7gi51DkfaKajbmv8fIXljW8SZ8gFPT6eHT40XpzitvqdHD5cTgrcjx4/8T0U1Hxe4G6I6axneFSH0sjfSH9O7Qh5pA5nfLA9ecs9sxz/2j3Wcgure/Q5HirKBb1j30Vhril3MHp4Su36ghVjcfTqLusNWXo0KOSiXtHi4nJ2gdigpOhWS8IfFAxxg6GS49znTkgBq1Bbt5DZ/+iqnUteyPxH16Ap5cLWy5n0AUN0XO/InD9fKE8rF9c2Oa1g5er6FzZ17hIc8bpG5JS6tp4+dEEvLXg05fUTm2Sn2siltQPYZF35ekvbX1fXSC42yrtZRbUKXWTPDpaGcnIvJQ/t3AI7I45AXP3fkN+fB+gL7Kvd1z/ZNt11q9630DXLdb92X5IKeVv3yZc+r/rVP4HNXgCMbe329rDyD15mOX9Q2mcXAAAAAElFTkSuQmCC"/>        
          </div>
        </div>
        <div>
          <h1 className=" font-bold">{user.fullname}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
