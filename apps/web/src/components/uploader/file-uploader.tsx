"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone, type FileRejection, type Accept } from "react-dropzone";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";
import {
  RenderEmptyState,
  RenderErrorState,
  RenderUploadedState,
  RenderUploadingState,
} from "./render-state";
import { toast } from "sonner";

interface FileUploaderProps {
  onChange?: (value: string) => void;
  value?: string;
  accept?: "image" | "video";
  maxSize?: number;
  className?: string;
}

interface FileState {
  error: boolean;
  file: File | null;
  id: string;
  uploading: boolean;
  progress: number;
  isDeleting: boolean;
  fileType: "image" | "video";
  key: string;
  objectURL: string;
}

export function FileUploader({
  onChange,
  value,
  accept = "image",
  maxSize = 5 * 1024 * 1024, // 5MB default
  className,
}: FileUploaderProps) {
  const isVideo = accept === "video";
  const acceptTypes: Accept = isVideo ? { "video/*": [] } : { "image/*": [] };
  const defaultMaxSize = isVideo ? 100 * 1024 * 1024 : maxSize; // 100MB for video, 5MB for image

  const [fileState, setFileState] = useState<FileState>({
    error: false,
    file: null,
    id: "",
    uploading: false,
    progress: 0,
    isDeleting: false,
    fileType: isVideo ? "video" : "image",
    key: value || "",
    objectURL: value || "",
  });

  // Simulate file upload (replace with your actual upload logic)
  async function uploadFile(file: File): Promise<void> {
    setFileState((prev) => ({
      ...prev,
      uploading: true,
      progress: 0,
    }));

    try {
      // Simulate upload progress
      for (let i = 0; i <= 100; i += 10) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        setFileState((prev) => ({
          ...prev,
          progress: i,
        }));
      }

      // For demo purposes, we'll use the object URL as the key
      // In a real implementation, you'd upload to your server/cloud storage
      const uploadedKey = `uploaded_${Date.now()}_${file.name}`;

      setFileState((prev) => ({
        ...prev,
        progress: 100,
        uploading: false,
        key: uploadedKey,
      }));

      // Set value to field
      onChange?.(uploadedKey);
      toast.success(`${isVideo ? "Video" : "Image"} uploaded successfully`);
    } catch (err) {
      toast.error("Upload failed. Something went wrong.");
      setFileState((prev) => ({
        ...prev,
        error: true,
        uploading: false,
        progress: 0,
      }));
      console.error("Upload error:", err);
    }
  }

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];

        // Clean up previous object URL
        if (fileState.objectURL && fileState.objectURL.startsWith("blob:")) {
          URL.revokeObjectURL(fileState.objectURL);
        }

        const objectURL = URL.createObjectURL(file);

        setFileState({
          file: file,
          uploading: false,
          progress: 0,
          objectURL: objectURL,
          error: false,
          id: uuidv4(),
          isDeleting: false,
          fileType: isVideo ? "video" : "image",
          key: "",
        });

        uploadFile(file);
      }
    },
    [fileState.objectURL, isVideo]
  );

  async function handleRemoveFile(): Promise<void> {
    if (fileState.isDeleting || fileState.uploading) return;

    setFileState((prev) => ({ ...prev, isDeleting: true }));

    try {
      // Simulate deletion delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      toast.success("File deleted successfully");

      // Clean up object URL
      if (fileState.objectURL && fileState.objectURL.startsWith("blob:")) {
        URL.revokeObjectURL(fileState.objectURL);
      }

      // Reset field value
      onChange?.("");

      setFileState({
        error: false,
        file: null,
        id: "",
        uploading: false,
        progress: 0,
        isDeleting: false,
        fileType: isVideo ? "video" : "image",
        key: "",
        objectURL: "",
      });
    } catch (err) {
      toast.error("Failed to delete file. Something went wrong.");
      setFileState((prev) => ({ ...prev, isDeleting: false }));
      console.error("Delete error:", err);
    }
  }

  // Handle rejected files
  function onDropRejected(rejectedFiles: FileRejection[]): void {
    if (rejectedFiles.length) {
      const tooManyFiles = rejectedFiles.find(
        (rejection) => rejection.errors[0]?.code === "too-many-files"
      );
      const tooBigSize = rejectedFiles.find(
        (rejection) => rejection.errors[0]?.code === "file-too-large"
      );

      if (tooBigSize) {
        toast.error(
          `File is too large. Max size: ${Math.round(
            defaultMaxSize / (1024 * 1024)
          )}MB`
        );
      }
      if (tooManyFiles) {
        toast.error("Too many files selected.");
      }
    }
  }

  // Content render
  function renderContent(): React.ReactNode {
    if (fileState.uploading) {
      return (
        <RenderUploadingState
          progress={fileState.progress}
          file={fileState.file}
        />
      );
    }

    if (fileState.error) {
      return <RenderErrorState />;
    }

    if (fileState.objectURL) {
      return (
        <RenderUploadedState
          previewUrl={fileState.objectURL}
          isDeleting={fileState.isDeleting}
          handleRemove={handleRemoveFile}
          fileType={fileState.fileType}
        />
      );
    }

    return <RenderEmptyState isDragActive={isDragActive} accept={accept} />;
  }

  // Clean up object URL on unmount
  useEffect(() => {
    return () => {
      if (fileState.objectURL && fileState.objectURL.startsWith("blob:")) {
        URL.revokeObjectURL(fileState.objectURL);
      }
    };
  }, [fileState.objectURL]);

  // Initialize with existing value
  useEffect(() => {
    if (value && !fileState.objectURL) {
      setFileState((prev) => ({
        ...prev,
        key: value,
        objectURL: value,
      }));
    }
  }, [value]);

  // Dropzone setup
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptTypes,
    maxFiles: 1,
    maxSize: defaultMaxSize,
    multiple: false,
    onDropRejected: onDropRejected,
    disabled: fileState.uploading || fileState.isDeleting,
  });

  return (
    <Card
      {...getRootProps()}
      className={cn(
        "relative border-2 border-dashed transition-colors duration-200 ease-in-out w-full h-64 cursor-pointer",
        isDragActive
          ? "border-primary bg-primary/10 border-solid"
          : "border-border hover:border-primary",
        (fileState.uploading || fileState.isDeleting) &&
          "cursor-not-allowed opacity-50",
        className
      )}
    >
      <CardContent className="flex items-center justify-center w-full h-full p-4">
        <input {...getInputProps()} />
        {renderContent()}
      </CardContent>
    </Card>
  );
}
