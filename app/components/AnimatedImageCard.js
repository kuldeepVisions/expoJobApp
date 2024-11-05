import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { motion } from 'framer-motion';

const AnimatedImageCard = ({ title, imageSource }) => {
  const fadeIn = {
    hidden: { opacity: 0, translateY: 20 },
    visible: { opacity: 1, translateY: 0 },
  };

  return (
    <motion.View
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.5 }}
      style={styles.card}
    >
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
    </motion.View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
});

export default AnimatedImageCard;
