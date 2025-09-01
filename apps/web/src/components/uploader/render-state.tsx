import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Upload, X, AlertCircle, Image, Video } from "lucide-react";

interface RenderEmptyStateProps {
  isDragActive: boolean;
  accept: "image" | "video";
}

export function RenderEmptyState({
  isDragActive,
  accept,
}: RenderEmptyStateProps) {
  const isVideo = accept === "video";

  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      {isVideo ? (
        <Video className="h-10 w-10 text-muted-foreground" />
      ) : (
        <Image className="h-10 w-10 text-muted-foreground" />
      )}
      <div className="space-y-2">
        <p className="text-sm font-medium">
          {isDragActive
            ? `Drop your ${isVideo ? "video" : "image"} here`
            : `Drag & drop your ${isVideo ? "video" : "image"} here`}
        </p>
        <p className="text-xs text-muted-foreground">
          or click to browse files
        </p>
      </div>
      <Button variant="outline" size="sm">
        <Upload className="h-4 w-4 mr-2" />
        Browse Files
      </Button>
    </div>
  );
}

interface RenderUploadingStateProps {
  progress: number;
  file: File | null;
}

export function RenderUploadingState({
  progress,
  file,
}: RenderUploadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full">
      <div className="text-center space-y-2">
        <p className="text-sm font-medium">Uploading...</p>
        <p className="text-xs text-muted-foreground truncate max-w-48">
          {file?.name}
        </p>
      </div>
      <div className="w-full max-w-xs space-y-2">
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-center text-muted-foreground">{progress}%</p>
      </div>
    </div>
  );
}

interface RenderUploadedStateProps {
  previewUrl: string;
  isDeleting: boolean;
  handleRemove: () => void;
  fileType: "image" | "video";
}

export function RenderUploadedState({
  previewUrl,
  isDeleting,
  handleRemove,
  fileType,
}: RenderUploadedStateProps) {
  return (
    <div className="relative w-full h-full group">
      {fileType === "video" ? (
        <video
          src={previewUrl}
          className="w-full h-full object-cover rounded-lg"
          controls
        />
      ) : (
        <img
          src={previewUrl}
          alt="Preview"
          className="w-full h-full object-cover rounded-lg"
        />
      )}

      {/* Overlay with remove button */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
        <Button
          variant="destructive"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            handleRemove();
          }}
          disabled={isDeleting}
        >
          {isDeleting ? (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <X className="h-4 w-4" />
          )}
          {isDeleting ? "Removing..." : "Remove"}
        </Button>
      </div>
    </div>
  );
}

export function RenderErrorState() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <AlertCircle className="h-10 w-10 text-destructive" />
      <div className="space-y-2">
        <p className="text-sm font-medium text-destructive">Upload failed</p>
        <p className="text-xs text-muted-foreground">
          Please try again or choose a different file
        </p>
      </div>
    </div>
  );
}
