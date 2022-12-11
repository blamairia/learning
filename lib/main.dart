import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      backgroundColor: Colors.cyan[700],
      appBar: AppBar(
        title: const Text('تطابق الصور'),
        backgroundColor: Colors.cyan[800],
      ),
      body: ImagePage(),
    ),
  ));
}

class ImagePage extends StatefulWidget {
  const ImagePage({super.key});

  @override
  State<ImagePage> createState() => _ImagePageState();
}

class _ImagePageState extends State<ImagePage> {
  var i = 1;
  var j = 1;

  void changeImage() {
    i = Random().nextInt(9) + 1;
    j = Random().nextInt(9) + 1;
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        Text(
          i == j ? 'you won' : 'Try again',
          style: const TextStyle(
            fontSize: 35,
            color: Colors.white,
          ),
        ),
        Row(
          children: [
            Expanded(
              child: Padding(
                padding: const EdgeInsets.all(20.0),
                child: TextButton(
                  onPressed: () {
                    setState(() {
                      changeImage();
                    });
                  },
                  child: Image.asset('images/image-$i.png'),
                ),
              ),
            ),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.all(20.0),
                child: TextButton(
                  onPressed: () {
                    setState(() {
                      changeImage();
                    });
                  },
                  child: Image.asset('images/image-$j.png'),
                ),
              ),
            ),
          ],
        ),
      ],
    );
  }
}
