'use client';
import NewFile from "@/app/custom/addFile";

export default function Component() {
  return (
    <main className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">You have no Files</h3>
        <p className="text-sm text-muted-foreground">
          You can start by adding some Files.
        </p>
        <div>
          <NewFile />
        </div>
      </div>
    </main>
  );
}
