// api/input.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        const { input } = req.body; // Get the input from the request body
        return res.status(200).json({
            message: `You sent: ${input}`, // Respond with the input
        });
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
}
