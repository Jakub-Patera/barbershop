import React from "react";
import { TeamMember } from "../../data/index";

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="border p-4 rounded-lg">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="rounded-full w-32 h-32 mx-auto"
      />
      <h3 className="text-xl font-bold mt-4 text-center">{member.name}</h3>
      <p className="text-center">{member.position}</p>
      <p className="text-sm mt-2 text-center">{member.bio}</p>
    </div>
  );
};

export default TeamMemberCard;
