import topMechanics from "../../../dummy-data/top-mechanics";

export default function handler(req, res) {
    const {id} = req.query;
    const mechanic = topMechanics.find(m => m.id === id);

    if (mechanic) {
        res.status(200).json(mechanic)
    } else {
        res.status(404).json({})
    }
}