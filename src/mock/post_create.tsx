import { IconCameraVideo, IconPhoto, IconUser } from "@/components/icons";

export const PostDocType = [
  {
    id: "vid",
    icon: <IconCameraVideo />,
    title_sm: "Live",
    title_lg: "Live Video",
  },
  {
    id: "pic",
    icon: <IconPhoto />,
    title_sm: "Photo",
    title_lg: "Photo/Video",
  },
  { id: "feel", icon: <IconUser />, title_sm: "Feeling", title_lg: "Feeling" },
];
