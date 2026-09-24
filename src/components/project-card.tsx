import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const projectAction = href
    ? {
        type: href.includes("github.com/") ? "Source" : "Website",
        href,
        icon: <ArrowUpRight aria-hidden="true" className="size-3" />,
      }
    : undefined;
  const actions = [
    ...(projectAction ? [projectAction] : []),
    ...(links ?? []).filter((item) => item.href !== href),
  ];

  const media = (
    <>
      {video && (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
        />
      )}
      {image && (
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="h-40 w-full overflow-hidden object-cover object-top"
        />
      )}
    </>
  );

  return (
    <Card
      className="flex h-full flex-col overflow-hidden border"
    >
      {(image || video) && <div className={className}>{media}</div>}
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {actions.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {actions.map((action) => (
              <Link
                href={action.href}
                key={`${action.type}-${action.href}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${action.type}: ${title}`}
              >
                <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                  {action.icon}
                  {action.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
