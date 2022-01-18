import topMechanics from "../../../dummy-data/top-mechanics";

export default function handler(req, res) {
    res.status(200).json(topMechanics.map(tm => ({...tm})))
}