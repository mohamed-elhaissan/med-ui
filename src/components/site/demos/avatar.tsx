import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"

const team = [
  { initials: "MR", name: "Maya Rivera" },
  { initials: "JO", name: "James Okafor" },
  { initials: "LC", name: "Lena Chen" },
  { initials: "AS", name: "Arjun Shah" },
]

export function AvatarDemo() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-end gap-4">
        <Avatar size="sm">
          <AvatarFallback>SK</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>EP</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>NW</AvatarFallback>
          <AvatarBadge />
        </Avatar>
      </div>
      <div className="flex items-center gap-3">
        <AvatarGroup>
          {team.map((member) => (
            <Avatar key={member.initials} size="lg">
              <AvatarFallback title={member.name}>
                {member.initials}
              </AvatarFallback>
            </Avatar>
          ))}
          <AvatarGroupCount>+5</AvatarGroupCount>
        </AvatarGroup>
        <span className="text-sm text-muted-foreground">9 members</span>
      </div>
    </div>
  )
}
