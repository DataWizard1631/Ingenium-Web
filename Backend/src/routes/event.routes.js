import { Router } from 'express';
import { 
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
} from '../controllers/event.controller.js';

const router = Router();

router.route('/').post(createEvent).get(getAllEvents);
router.route('/:id')
  .get(getEventById)
  .put(updateEvent)
  .delete(deleteEvent);

export default router; 