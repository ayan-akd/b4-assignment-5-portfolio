"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { TMessage } from "@/types/types";
import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Button } from "@/components/ui/button";
  import { Trash2 } from "lucide-react";
  import { toast } from "sonner";
type TExtendedMessage = TMessage & {
    _id: string;
  };
export default function ManageMessagePage() {
  const [messages, setMessages] = useState<TExtendedMessage[]>([]);

  useEffect(() => {
    fetch("/api/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data.data))
      .catch((error) => console.error("Error fetching messages:", error));
  }, []);
  
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setMessages(messages.filter((message) => message._id !== id));
        toast.success("Message deleted successfully");
      } else {
        toast.error("Failed to delete message");
      }
    } catch (error) {
      console.error("Error deleting message:", error);
      toast.error("Failed to delete message");
    }
  };
  return (
    <ContentLayout title="Manage Messages">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">All Messages</h1>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="max-w-[300px]">Message</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((message) => (
                <TableRow key={message._id}>
                  <TableCell className="font-medium">{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell className="max-w-[300px] truncate">
                    {message.message}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(message._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </ContentLayout>
  );
}
