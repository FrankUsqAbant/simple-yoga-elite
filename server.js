require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');

const app = express();
app.use(cors());
app.use(express.json());

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.post('/api/create-checkout-session', async (req, res) => {
  const { classId, classTitle, date, name, email, phone } = req.body;

  try {
    // Creamos una sesión de Checkout en Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email, // Pre-rellena el email del cliente en la pasarela
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Reserva Clase: ${classTitle}`,
              description: `Fecha: ${date}`,
            },
            unit_amount: 1500, // Precio fijo demo: $15.00 USD (en centavos)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      // Mandamos metadata oculta para procesar la reserva después del pago
      metadata: {
        classId,
        date,
        name,
        phone,
      },
      success_url: `http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}&class_id=${classId}`,
      cancel_url: `http://localhost:5173/clases`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`✅ Servidor de Pagos (Stripe) corriendo en http://localhost:${PORT}`);
});
