<?php
/**
 * Ekta Avenue Phase 3 — Lead capture endpoint (PHP + MySQL)
 * ---------------------------------------------------------
 * Deploy this on your PHP host and set `leadEndpoint` in lib/site-config.ts
 * to its public URL, e.g. https://yourdomain.com/lead.php
 *
 * Accepts a JSON body: { name, phone, email, budget, message }
 */

header('Content-Type: application/json');

// --- CORS (adjust the allowed origin to your domain) ---
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// --- Database credentials ---
$DB_HOST = 'localhost';
$DB_NAME = 'ekta_avenue';
$DB_USER = 'db_user';
$DB_PASS = 'db_password';

// --- Read + validate input ---
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    $input = $_POST; // fallback for form-encoded submissions
}

$name    = trim($input['name']    ?? '');
$phone   = trim($input['phone']   ?? '');
$email   = trim($input['email']   ?? '');
$budget  = trim($input['budget']  ?? '');
$message = trim($input['message'] ?? '');

if ($name === '' || $phone === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Name and phone are required.']);
    exit;
}

try {
    $pdo = new PDO(
        "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
        $DB_USER,
        $DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );

    // Parameterized query prevents SQL injection.
    $stmt = $pdo->prepare(
        'INSERT INTO leads (name, phone, email, budget, message, source, created_at)
         VALUES (:name, :phone, :email, :budget, :message, :source, NOW())'
    );
    $stmt->execute([
        ':name'    => $name,
        ':phone'   => $phone,
        ':email'   => $email,
        ':budget'  => $budget,
        ':message' => $message,
        ':source'  => 'Ekta Avenue Phase 3 Website',
    ]);

    // Optional: notify the sales team by email.
    // mail('sales@ektaavenue.example.com', 'New Website Enquiry', "Name: $name\nPhone: $phone\nEmail: $email\nBudget: $budget\nMessage: $message");

    echo json_encode(['ok' => true, 'message' => 'Lead saved successfully.']);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Server error. Please try again.']);
}
