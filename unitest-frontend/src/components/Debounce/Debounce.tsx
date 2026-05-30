import React, { useState, useEffect, useMemo } from "react";
import debounce from "lodash/debounce";

// Data Type following jsonplaceholder.typicode.com
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const Debounce: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  // Debounced search logic to fetch matching users
  const fetchUsers = useMemo(() => {
    return debounce((term: string) => {
      setLoading(true);
      const url = term
        ? `https://jsonplaceholder.typicode.com/users?q=${encodeURIComponent(term)}`
        : "https://jsonplaceholder.typicode.com/users";

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setUsers(data || []);
        })
        .catch((err) => {
          console.error("Error fetching users:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 400);
  }, []);

  // Trigger search when search term changes
  useEffect(() => {
    fetchUsers(searchTerm);
    // Cleanup debounced search to prevent memory leaks on unmount
    return () => {
      fetchUsers.cancel();
    };
  }, [searchTerm, fetchUsers]);

  return (
    <div style={{ padding: "16px", maxWidth: "400px", margin: "0 auto" }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search users..."
        style={{
          width: "100%",
          padding: "8px 12px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          boxSizing: "border-box",
          marginBottom: "12px",
        }}
      />
      {loading ? (
        <p>Searching...</p>
      ) : users.length > 0 ? (
        <ul style={{ listStyleType: "none", padding: 0, textAlign: "left" }}>
          {users.map((user) => (
            <li
              key={user.id}
              style={{
                padding: "8px",
                borderBottom: "1px solid #eee",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <strong style={{ fontSize: "14px" }}>{user.name}</strong>
              <span style={{ fontSize: "12px", color: "#666" }}>
                @{user.username} - {user.email}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};
