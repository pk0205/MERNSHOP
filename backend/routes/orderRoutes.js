import express from 'express';

import { protect } from './../middleware/authMiddleware.js';
import {
  addOrderItems,
  getOrderByID,
  updateOrderToPaid,
  getMyOrders,
} from './../controllers/orderController.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems);
router.route('/myorder').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderByID);
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router;
